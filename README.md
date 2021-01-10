# Nearest Food Webpage

## Overview

[Website Link](https://nearby-food-web.herokuapp.com/)

This mini-project is for me to practice building a full-stack end-to-end web interface from scratch, while explore different APIs (Google Maps API).
This project expounds on the functionality introduced in my [telegram bot](https://github.com/JeraldYik/telegram-bot)
(Access bot on telegram via id [@jyik001_test_bot](https://t.me/jyik001_test_bot) or on [heroku website](https://jyik001-telegram-bot.herokuapp.com/))

## Services Used

- Next.js with Typescript (naturally React.js)
- Google Maps API
- Semantic UI

## Front-end:

- [ ] Interactive map (OSM)
- Filters (Button/Slider)
  - [x] Type of Eatery (Restaurant, Cafe)
  - [x] Rating
  - [x] Dollar Sign
  - [x] Radius
- [x] User input of address/postal-code (Input field)
- [ ] Get user's live location
- [x] State management: useReducer, useContext hook
- [x] Display of Results (with Pagination)
- [ ] Styling (Semantic UI)
- [ ] Handle appropriate error messages (404, 500 etc)
- [ ] About page
- [ ] Login/Signup page
- [ ] User info page

## API calling

- [x] Set up infrastructure to call API & handle errors
- [ ] Can successfully call API

## Back-end

- [ ] Log in functionality
- [ ] Set up DB
- [ ] User can favourite a certain location -> User info stored in DB

## Deployment

- [ ] Deploy onto cloud (will use Heroku for now, since Free Tier Amazon EC2 only lasts for 31 days)
