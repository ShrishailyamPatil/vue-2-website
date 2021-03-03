var app = new Vue({
  el: '#app',
  data:{
    brand: 'Marvel',
    product: 'Hydra Poster',
    image: 'images/hydra.jpg',
    stock:20,
    present: true,
    save: '20%',
    value: '23$',
    details:["80% polyster","Waterproof","Great quality"],
    varaints:[
      {
        varId: 232,
        varcolor:'Red',
        varimg: 'images/hydra.jpg'
      },
      {
        varId: 233,
        varcolor:'Black',
        varimg: 'images/hydrablack.jpg'
      }
    ],
    cart: 0
  },

  methods :{
    addtocart(){
      this.cart+=1
    },
    removefromcart(){if (this.cart>0) {
        this.cart-=1
    }

    },
    getf(present){
      if(this.stock==0){
        this.present=false
      }
    },
    updateproduct(varimg){
      this.image= varimg
    }
  },
  computed:{
    title(){
      return this.brand+' '+this.product
    }
  }
})

