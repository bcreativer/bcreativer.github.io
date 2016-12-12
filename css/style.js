import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "header-row": {
        "marginBottom": "4%"
    },
    "header-nav": {
        "width": "100%",
        "height": 200,
        "position": "relative"
    },
    "header-nav logo": {
        "width": 200,
        "height": 200
    },
    "header-nav ul": {
        "listStyle": "none",
        "width": "70%",
        "height": "90%",
        "position": "absolute",
        "left": "17%"
    },
    "header-nav ul li": {
        "fontFamily": "'Roboto', sans-serif",
        "color": "rgba(0,0,0,0.6)",
        "textDecoration": "none",
        "fontSize": 1.6,
        "display": "inline-block",
        "marginRight": "7%",
        "cursor": "pointer"
    },
    "header-nav ul li:hover": {
        "backgroundColor": "yellow"
    },
    "header-nav ul li:first-child": {
        "backgroundColor": "#fff"
    },
    "describe": {
        "backgroundColor": "#fff100"
    },
    "describe-me": {
        "width": "30%",
        "height": 150,
        "marginLeft": "35%",
        "marginTop": "5%"
    },
    "describe-me p": {
        "lineHeight": 1.2,
        "fontSize": 1.2,
        "fontFamily": "Futura, san-serif",
        "color": "rgba(0,0,0,0.6)",
        "textShadow": "2px 8px 6px rgba(0,0,0,0.2),                 0px -5px 35px rgba(255,255,255,0.3)"
    },
    "portfolio": {
        "marginBottom": "3%",
        "color": "rgba(0,0,0,0.6)"
    },
    "portfolio h1": {
        "fontFamily": "'Roboto', sans-serif",
        "paddingTop": "4%",
        "paddingLeft": "10%",
        "paddingBottom": "4%"
    },
    "portfolio h4": {
        "fontFamily": "'Roboto', sans-serif",
        "textAlign": "center",
        "fontStyle": "italic"
    },
    "portfolio h1 a": {
        "textDecoration": "none"
    },
    "portfolio p": {
        "fontStyle": "italic"
    },
    "portfolio-1": {
        "width": "auto"
    },
    "portfolio-1 img": {
        "width": 400,
        "height": 350
    },
    "portfolio-1 figure": {
        "marginLeft": "30%",
        "marginBottom": "10%",
        "textAlign": "center"
    },
    "portfolio-1 figcaption": {
        "fontSize": 1.5,
        "marginTop": "2%"
    },
    "portfolio-2": {
        "width": "auto"
    },
    "portfolio-2 img": {
        "maxWidth": 400,
        "height": 350
    },
    "portfolio-2 figure": {
        "marginLeft": "5%",
        "marginBottom": "10%",
        "textAlign": "center"
    },
    "portfolio-2 figcaption": {
        "fontSize": 1.5,
        "marginTop": "2%"
    },
    "about": {
        "height": 580,
        "backgroundColor": "#fff100",
        "color": "#fff",
        "marginBottom": "5%",
        "position": "relative"
    },
    "about h1": {
        "fontFamily": "'Roboto', sans-serif",
        "paddingTop": "2%",
        "paddingLeft": "18%",
        "color": "rgba(0,0,0,0.6)"
    },
    "about-1": {
        "paddingLeft": "17%",
        "position": "absolute",
        "marginLeft": "15%",
        "marginTop": "5%",
        "marginBottom": "5%"
    },
    "about-1 img": {
        "width": "100%",
        "height": "auto",
        "objectFit": "contain"
    },
    "about-2": {
        "width": "75%",
        "position": "absolute",
        "marginTop": "13%",
        "marginLeft": "8%"
    },
    "about-2 h2": {
        "fontFamily": "'Roboto', sans-serif",
        "color": "rgba(0,0,0,0.6)",
        "textShadow": "2px 8px 6px rgba(0,0,0,0.2),                 0px -5px 35px rgba(255,255,255,0.3)"
    },
    "about-2 p": {
        "fontFamily": "Futura, san-serif",
        "color": "rgba(0,0,0,0.6)"
    },
    "about-2 hr": {
        "color": "#fff"
    },
    "contact": {
        "marginBottom": "5%",
        "color": "rgba(0,0,0,0.6)"
    },
    "contact h1": {
        "fontFamily": "'Roboto', sans-serif",
        "paddingLeft": "9%",
        "paddingBottom": "5%"
    },
    "contact line": {
        "fontFamily": "Futura, san-serif",
        "fontSize": 1.8,
        "paddingBottom": "2%"
    },
    "contact social-media": {
        "textAlign": "center"
    },
    "social-media": {
        "paddingBottom": "1%"
    },
    "social-media a": {
        "marginTop": "4%",
        "marginRight": "4%",
        "marginBottom": "4%",
        "marginLeft": "4%"
    },
    "form": {
        "textAlign": "center",
        "marginTop": "4%",
        "marginRight": "4%",
        "marginBottom": "4%",
        "marginLeft": "4%"
    },
    "form h1": {
        "fontFamily": "Futura, san-serif",
        "fontSize": 1.8,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "form p email": {
        "marginTop": "2%"
    },
    "form p input": {
        "width": "40%",
        "fontSize": 1.5
    },
    "form p input:hover": {
        "border": "2px solid yellow"
    },
    "form p textarea": {
        "width": "40%",
        "fontSize": 1.5
    },
    "form p textarea:hover": {
        "border": "2px solid yellow"
    },
    "form p button": {
        "background": "#3498db",
        "backgroundImage": "linear-gradient(#3498db, #2980b9)",
        "WebkitBorderRadius": 28,
        "MozBorderRadius": 28,
        "borderRadius": 28,
        "textShadow": "1px 1px 3px #666666",
        "fontFamily": "Arial",
        "color": "#ffffff",
        "fontSize": 20,
        "paddingTop": 10,
        "paddingRight": 20,
        "paddingBottom": 10,
        "paddingLeft": 20,
        "textDecoration": "none",
        "width": "20%"
    },
    "form p button:hover": {
        "background": "#3cb0fd",
        "backgroundImage": "linear-gradient(to bottom, #3cb0fd, #3498db)",
        "textDecoration": "none"
    },
    "copyright": {
        "fontFamily": "Futura, san-serif",
        "fontSize": 1.2,
        "textAlign": "center",
        "marginTop": "2%",
        "marginRight": "2%",
        "marginBottom": "2%",
        "marginLeft": "2%"
    },
    "footer": {
        "backgroundColor": "#fff100",
        "color": "rgba(0,0,0,0.6)"
    },
    "to-top": {
        "backgroundColor": "#000",
        "border": "1px solid #000",
        "color": "#fff",
        "fontFamily": "Futura, san-serif",
        "width": "10%",
        "bottom": "50%",
        "right": 0,
        "paddingTop": "1%",
        "position": "fixed",
        "textAlign": "center",
        "zIndex": 2,
        "display": "none"
    },
    "to-top:hover": {
        "color": "#fff100",
        "cursor": "pointer",
        "textDecoration": "underline"
    }
});