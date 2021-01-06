# Irezumi
A Tattoo enthusiast's go to for tattoos.

# Table of Contents

0. [Story](#Story)
1. [Prep](#Prep)
2. [About](#About)
3. [Install](#Install)
4. [Challenges](#Challenges)
5. [Code](#Peak)
6. [Future](#Future)

## Story

For project 3, the team came up with an idea for tattoo enthusiast. Using, mongoDB, React, Axios, Cloudinary and styling from Bootstrap, our goal was to make a go to hub for tattoo enthusiast.

As a user, you should be be welcome to the home page with instructions on how to use the website, not just try to figure it out yourself. Once you log in, you will see your profile page, and have a section where you can edit your profile.

The user will be able to navigate to pages where you can search a shop, get inpiration on type of tattoos to get, check out the most popular places that we (Irezumi) recommend, but also be able to search shops in your area.

A one stop shop for some great shops will be all someone needs to visit to get inspired, get ideas, look up shops, and check the reviews out.

Getting your possible first tattoo shouldn't be scary. This lets you find a place that leaves you in good hands when making such a permanent decision and also give you the ability to get inspired about what tattoo you would like to get.


### Prep

To Prep for the porject we first brain stormed on how we wanted the site to operate. Styling was put in the back end to make sure we have all the pieces for the front end first. Together we came up with a site that operates how a user would expect it to operate.

We came up with a wireframe for how the site should operate and usign Adobe XD we saw a protoype come to life. You can check that out [HERE!](https://xd.adobe.com/view/6e2eda93-7ea2-4cba-b063-edd797b84480-3b7d/?fullscreen)

Below is the overall image of how the site is built out.
![Image of Overview](https://i.imgur.com/m0fUbuE.png)

Next we came up with a plan on how to store data on our DB using mongoDB. We created a mockup schema on what information we would be storing.

![Image of EDR](https://i.imgur.com/Nn92kCU.png)


## Install
### Follow these steps to get Irezumi working on your computer locally, or click below to use it live.
[LIVE SITE](#)

0. Make a folder on your dektop or location you prefer.
1. Go to [Frontend Repo](https://github.com/anonyymous1/irezumi-client).
2. `Fork` page.
3. `Clone` code.
4. Open iTerm2 .
5. Type - `git clone https://github.com/anonyymous1/my-closet.git` into iTerm2.
6. Follow the same steps for [Backend Repo](https://github.com/anonyymous1/irezumi-backend).
7. Using your terminal, navigate to you main app folder and type `npm install`. This will download all the node_modules you need to run. This will have to be done for both repo files.
8. Next using the terminal open the front end app using `code .` in the terminal. Create a file in the main directory called `.env` inside you will type `REACT_APP_SERVER_URL=http://localhost:8000`.
9. Next using the terminal open the backend app using `code .` in the terminal. Create a file in the main directory called `.env` inside you will type `JWT_SECRET="irezumiproject3"` &
`MONGO_URI=mongodb://127.0.0.1:27017/Irezumi`.
10. Finally, open two windows in your terminal and open both frontend and backend and type `npm start` to start the site.

### Challenges

Some of the challenges fell more with working as a team. Not because we couldn't but because it was the first time we had to rely on teamwork. Overall the experience was great to learn and it made us appreciate team devs. The constant communication is key on team projects.

Remember to create branches at first was really hard when you are so zoned in on the code. So i think this was a great project to get use to how real world teams may operate.


### Peak at my Code

PEEK OF SOME HTML CODE FOR A DISPLAY PAGE
```<div>
        <div className="welcome-text">
        <h1>Irezumi 入れ墨</h1>
        <h3 className="front-desc">Welcome, at Irezumi you can find the best parlors and artists around as well as gain some inspiration for tattoos that you want and the best places to go to get them done.</h3>
        </div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://i.imgur.com/Ve172Bu.png" className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="https://i.imgur.com/hPNE1fq.png" className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="https://i.imgur.com/nr6ZQC9.png" className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="https://i.imgur.com/kBAWQx5.png" className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="https://i.imgur.com/OYBg6uq.png" className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="https://i.imgur.com/FtQ4TkC.png" className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="https://i.imgur.com/0cRREaB.png" className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                    <img src="https://i.imgur.com/nesRUd6.png" className="d-block w-100" alt="..."></img>
                </div>
```
CSS STYLING ADDED TO BOOTSTRAP COMPONENTS
```.welcome-text {
  position: absolute;
  margin-top: 250px;
  margin-left: 5%;
  width: 900px;
  color: whitesmoke;
  z-index: 1;
  font-family: 'Yeon Sung', cursive;
}
img {
  border-radius: 5px;
}
.top-five-h1 {
  margin-top: 35px;
  margin-bottom: 10px;
}
```
PEEK AT CODE THAT FINDS OR CREATES STYLE AND USER INTO TWO TABLES
```router.put('/update', (req, res)=> {
    db.User.findOneAndUpdate(
        {_id: req.body.userID},
        {email: req.body.email, name:req.body.name, imageURL: req.body.url}, // Changed in MongoDB 4.2
        {
          upsert: true
        }
     ).then(res =>{
        console.log('successful', res);
     })
})
```

### Future

Here's a list of some of the functionality that we would like to add in the future so that i can have a great piece to show off:
- Added functionalities like uploading your own artwork.
- Functionality for `Have` and `Want` for each user.
- Having a branch for shop owners to input their businesses in the site.
- Add better, more styling to the site.
- More indepth use of mongoDB and routing.
- Make app mobile friendly not just window scale friendly.