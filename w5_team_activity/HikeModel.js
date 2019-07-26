// normally the model would have more going on...retrieving the hikes from a database, adding hikes, editing hikes, filtering, etc. Our model will be very simple.  We could simply export the hikeList, but a better pattern would be to create a 'getter' function to do it instead. That way as our model changed...we could simply change the getter function and anything using it should be able to remain the same.
const hikeList = [

    new HikeModel ('Bechler Falls', 'falls.jpg', 'Image of Bechler Falls', '3 miles', 'Easy', 'Beautiful short hike along the Bechler river to Bechler Falls', 'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.'),
    
    new HikeModel ('Teton Canyon', 'falls.jpg', 'Image of Bechler Falls', '3 miles', 'Easy', 'Beautiful short hike along the Bechler river to Bechler Falls', 'Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.'),

    new HikeModel ('Denanda Falls', 'falls.jpg', 'Image of Bechler Falls', '3 miles', 'Easy', 'Beautiful short hike along the Bechler river to Bechler Falls', 'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.'),
 
]

// Hike Model
export default class HikeModel {
    // We need a constructor...but in this case it isn't doing much
  
    constructor(name, ingSrc, imgAlt, distance, difficulty, description, directions) {
    this.name = name;
    this.imgSrc = imgSrc;
    this.imgAlt = imgAlt;
    this.distance = distance;
    this.difficulty = difficulty;
    this.description = description;
    this.directions = directions;
  }
  
  getAllHikes() {
    // should return a list of all the hikes.
    return this.hikeList;
  }
  
  getHikeByName(hikeName) {
    // filter the hikes for the record identified by hikeName and return it
    return this.hikeList.find(hike => hike.name === name);
  }
}