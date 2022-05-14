AFRAME.registerComponent("comic_posters", {
    init: function () {
      this.postersContainer = this.el;
    this.createCards()    
    },
  
    createCards: function () {
      const comicContainer = [
        {
          id: "spiderman",
          title: "Spiderman",
          url: "./assets/posters/spiderman.png",
        },
        {
          id: "ironman",
          title: "Iron Man",
          url: "./assets/posters/ironman.jpg",
        },
  
        {
          id: "thor-ragnarok",
          title: "Thor Ragnarok",
          url: "./assets/posters/tor-ragnarok.jpg",
        },
        {
          id: "Avengers",
          title: "Avengers 1",
          url: "./assets/posters/avengers.png",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of comicContainer) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl = this.createBorders(position , item.id)
        // Thumbnail Element
       const thumbnailEl = this.createThumbnails(item)
       borderEl.appendChild(thumbnailEl)
        // Title Text Element
        const titleEl = this.createTitle(position , item)
        borderEl.appendChild(titleEl)
        this.postersContainer.appendChild(borderEl);
      }
    },
  
    createBorders : function(position , id){
      const entityel = document.createElement("a-entity")
      entityel.setAttribute("id", id)
      entityel.setAttribute("visible" ,  true)
      entityel.setAttribute("geometry" , {
        primitive : "ring",
        radiusInner : 9,
        radiusOuter : 10
      }) ,
      entityel.setAttribute("position" , position)
      entityel.setAttribute("material" , {
        color: "red",
        opacity : 0.5
      })
      return entityel
    },
    createThumbnails : function (item){
      const entityel = document.createElement("a-entity")
      entityel.setAttribute("visible" , true)
      entityel.setAttribute("geometry" , {
        primitive : "Square",
        radius : 9
      })
      entityel.setAttribute("material" , {src : item.url})
      return entityel
    },
    createTitle : function (position , item){
      const entityel = document.createElement("a-entity")
      entityel.setAttribute("text" , {
        font : "exo2bold",
        align : "center" ,
        width: 70,
        color : "red",
        value : item.title
      })
      const elposition = position
      elposition.y = -20
      entityel.setAttribute("position" , elposition)
      entityel.setAttribute("visible" , true)
      return entityel
    }
  
  });
  