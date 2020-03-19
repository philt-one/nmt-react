# NMT-React :us: :de:


![Screen Preview](https://raw.githubusercontent.com/freetechno128/nmt-react/master/preview.png)


This tool based under a Neural Machine Translation technology will help you translate English to German. The frontend uses ReactJS to dynamically render the DOM and Bootstrap to make the website responsive. The backend is written in Python using Flask to easily define the endpoints. The machine learning model was built using TensorFlow and OpenNMT.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

First, you'll need to install OpenNMT-tf, flask, flask_cors and pyonmttok. It is highly recommended to install them in a virtual environment.

```
virtualenv api/venv
. /venv/bin/activate
pip install --upgrade pip
pip install OpenNMT-tf flask flask_cors pyonmttok 
```

Then you'll need to install the dependencied for the frontend. We will use yarn instead of node because it downloads packages in parallel, which reduces the download time. Also because it adds nice emojis in the terminal while it's downloading. Everybody likes emojis! :heart:

```
yarn install
```

Download the pretrained OpenNMT model by executing the `setup.sh` script.

### :rocket: Starting the Frontend

To start the frontend, simply go in the root of the project (`./nmt-react`) and type  `yarn start`.

### :snake: Starting the Backend

To start the frontend, simply go in the api folder of the project (`./nmt-react/api`) and type  `python server.py`.

## Built With

* [create-react-app](https://github.com/facebook/create-react-app) - Toolkit to setup ReactJS
* [OpenNMT-tf](https://opennmt.net/) - Machine Learning Tool
* [Flask](https://github.com/pallets/flask) - Backend API

## Authors

* **Philippe Talarico** - [freetechno128](https://github.com/freetechno128)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


