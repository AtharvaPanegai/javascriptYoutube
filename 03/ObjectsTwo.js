var mobile = {
    mobileName : "Samsung",
    numberofCamera : 3,
    colorofCover : "blue",
    isMobileYours : true,
    photos : [],
    clickAPhoto : function(photoName){
        this.photos.push(photoName);
    },
    getPhotoCount : function(){
        return `The gallery of ${this.mobileName} is having ${this.photos.length} photos`;
    }
}

console.log(mobile.getPhotoCount());
mobile.clickAPhoto("naturePhoto");
mobile.clickAPhoto("BuildingPhoto");

console.log(mobile.getPhotoCount());




