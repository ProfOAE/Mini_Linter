class Media {
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title (){
      return this._title;
    }
  
    get isCheckedOut (){
      return this._isCheckedOut;
    }
  
    get ratings (){
      return this._ratings;
    }
  
     set isCheckedOut (value){
      this._isCheckedOut = value;
    }
  
    toggleCheckOutStatus(){
      return this.isCheckedOut = 
      !(this.isCheckedOut );
    }
  
    getAverageRating(){
      let aveg = this.ratings.reduce( (preVa,      curVa) => preVa + curVa, 0);
      return aveg / this.ratings.length;  
    }
  
    addRating(newValue){
      if (newValue > 1 && newValue < 6){
        this.ratings.push(newValue);
      } else {
        this.ratings.push(1);
      }
      
    }
  }
  
  class Book extends Media {
    constructor (author, title, pages){
      super(title)
      this._author = author;
      this._pages = pages;
    }
      get author(){
      return this._author = author;
      }
  
      get pages(){
        return this._pages = pages;
      }
  }
  // subclass Movie
  class Movie extends Media {
    constructor(director, title, runTime){
  super(title)
    this._director = director;
    this._runTime = runTime;
    }
    
    get director(){
      return this._director;
    }
  
    get runTime(){
      return this._runTime;
    }
  }
  
  // subclass CD
  class CD extends Media{
    constructor(artist, title, songs){
      super(title)
      this._artist = artist;
      this._songs = [];
    }
  
    get artist (){
      return this._artist;
    }
  
    get songs (){
      return this._songs;
    }
  
    /*addSong(newSong){
    this.songs.push(newSong)
    }*/
  }
  
  //instance of Book 
  const historyOfEverything = new Book ('Bill Bryson','A Short History of Nearly Everything',544);
  
  // calling the methods on book instance
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  
  // instance of movie
  const speed = new Movie('Jan de Bont', 'Speed',116);
  
  // calling methods on movie instance
  speed.toggleCheckOutStatus();
  
  console.log(speed.isCheckedOut);
  
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  console.log(speed.runTime);
  
  //instance of CD
  const track1 = new CD('Sinach', 'Way Maker', 'You are here, moving in our midst\nI worship You, I worship You\nYou are here, working in this place\nI worship You, I worship You');
  
  // calling methods on CD's instance(track1)
  track1.addRating(5);
  track1.addRating(5);
  track1.addRating(5);
  track1.toggleCheckOutStatus()
  
  console.log('');
  
  console.log(track1.artist);
  console.log(track1.title);
  //console.log(track1.songs);
  console.log(track1.isCheckedOut);
  console.log(track1.getAverageRating());
  
  
  