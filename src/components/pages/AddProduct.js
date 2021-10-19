import React, { Component } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import './AddProduct.css';
export default class AddProduct extends Component {
    constructor(props){
        super(props)

        
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.files=this.files.bind(this);

        this.state = {
            productname : '',
            description : '',
            price : 0,  
            images:'',
            imagenFile:[],
            c1:[],
            boolImages:false,
        }
    }

    onChangeProductName(e) {
        this.setState({
          productname: e.target.value
        })
    } 
    onChangeDescription(e) {
        this.setState({
          description: e.target.value
        })
    } 
    onChangePrice(e) {
        this.setState({
          price: e.target.value
        })
      }

      files(event) {
        var files = event.target.files
        const imgl = this.state.imagenFile.length
        const fl = files.length

        if (fl > 0) {
            if (fl > 10) {
                Swal.fire({
                    title: "Solo puedes subir 10 imagenes de tu producto"
                })

                for (var i = 0; i < 10; i++) {
                    this.state.imagenFile.push(files[i]);
                }

                while (this.state.imagenFile.length > 10) {
                    this.state.imagenFile.shift()
                }

            } else {

                if ((imgl + fl) > 10) {
                    Swal.fire({
                        title: "Solo puedes subir 10 imagenes de tu producto"
                    })

                    for (var i = 0; i < fl; i++) {
                        this.state.imagenFile.push(files[i]);
                    }

                    while (this.state.imagenFile.length > 10) {
                        this.state.imagenFile.shift()
                    }

                } else {

                    for (var i = imgl; i < imgl + fl; i++) {
                        this.state.imagenFile.push(files[i - imgl]);
                    }
                }
            }
            for(var i=0;i<this.state.imagenFile.length;i++){
                this.state.c1[i] = URL.createObjectURL(this.state.imagenFile[i])
            }

            this.setState({
                boolImages: !this.state.boolImages
            })
        }
    }



      async onSubmit(e) {
        e.preventDefault();
        var images=[]

        const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/pauspersonalcare/image/upload';
        const UPLOAD_PRESET = 'pauspersonalcare';

        const formImages = new FormData();
        
        if (this.state.description != "" & this.state.productname!="" & this.state.price!=""){
          for(var i=0;i<this.state.imagenFile.length;i++){
            formImages.append('file', this.state.imagenFile[i]);
            formImages.append('upload_preset', UPLOAD_PRESET);
            const resI = await axios.post(CLOUDINARY_URL, formImages);
            images.push(resI.data.secure_url)
        }
        }


        try {
          this.setState({images:images});
        } 
      catch (err) {
          console.error("No se pudo emparejar las imágenes");
      }

          const product = {
            productname : this.state.productname,
            description : this.state.description,
            price : this.state.price,
            images : this.state.images
          }
      
        axios.post('https://backend-paus-personal-care.herokuapp.com/products/add', product)
          .then(res => {
            Swal.fire({
            title: res.data
          })
          if(res.data == "Product added!"){
            this.setState({
              productname : '',
              description : '',
              price : 0,  
              images:'',
              imagenFile:[],
              c1:[],
              boolImages:false,
              
          })
          }
        
        }
        );
        
        
      }

      render() {
        return (
        <div className = "form-style-6">
          <h3>Create New Product</h3>
          <form onSubmit={this.onSubmit}>

          <div className="form-group"> 
              <label>Product Name: </label>
              <input  type="text"
                  className="form-control"
                  value={this.state.productname}
                  onChange={this.onChangeProductName}
                  />
            </div>

            <div className="form-group"> 
              <label>Description: </label>
              <input  type="text"
                  className="form-control"
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                  />
            </div>
            
            <div className="form-group">
              <label>Price </label>
              <input 
                  type="text" 
                  className="form-control"
                  value={this.state.price}
                  onChange={this.onChangePrice}
                  />
            </div>

            <div className="form-group">
            <label>Picture</label>
            </div>
            <fieldset>
                <div >
                    <div >
                          <div className="imginserted">
                                <img src={this.state.c1[0]}/>
                                <img src={this.state.c1[1]}/>
                                <img src={this.state.c1[2]}/>
                                <img src={this.state.c1[3]}/>
                                <img src={this.state.c1[4]}/>

                          </div>
                          <div className="imginserted">
                                <img src={this.state.c1[5]}/>
                                <img src={this.state.c1[6]}/>
                                <img src={this.state.c1[7]}/>
                                <img src={this.state.c1[8]}/>
                                <img src={this.state.c1[9]}/>
                          </div>
                            </div>
                              <div className="inpt">
                                <input type="file" name="imagen" id="image" placeholder="imagen"
                                accept="image/*"
                                onChange={this.files}/>
                              </div>
                            </div>

            </fieldset>
            
            <div className="form-group">
              <input type="submit" value="Create Product" className="btn btn-primary" />
            </div>

          </form>
        </div>
        )
      }



}
