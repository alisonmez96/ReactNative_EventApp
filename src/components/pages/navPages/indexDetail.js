import React  from 'react';
import { Text, Image, ImageBackground } from 'react-native';
import { CardSectionBlog, Card } from '../../common/index';

const IndexDetail = ({ game }) => {

    const { title, name, description, image, img_profile } = game;
    const { headerTextStyle, imageStyle,thumbnailStyle, titleTextStyle, textStyle } = styles;

    return (
        <Card>
          <CardSectionBlog>
              <ImageBackground source={{ uri: image }} style={ imageStyle } imageStyle={{ borderRadius: 15 }}>
                  <Text style={ headerTextStyle }>{ name }</Text>
                  <Image style={ thumbnailStyle } source= {{ uri: img_profile }} />
              </ImageBackground>

              <Text style={ titleTextStyle }>{ title }</Text>
              <Text style={ textStyle }>{ description }</Text>
            </CardSectionBlog>
        </Card>

    );
};


const styles = {
    headerTextStyle: {
        fontSize: 22,
        color: '#e74c3c',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '40%',
        backgroundColor: 'white',
    },
    titleTextStyle:{
        fontSize: 18,
        marginTop: '10%',
        width: '80%',
        marginLeft: '10%',
        color: 'black'
    },
    textStyle: {
        fontSize: 14,
        marginBottom: '3%',
        width: '80%',
        marginLeft: '10%'
    },
    thumbnailStyle: {
        height: 80,
        width: 80,
        borderRadius: 40,
        marginLeft: '5%',
        marginTop: '-10%'
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 200,
        flex: 1,
        width: '100%',
        borderRadius: 10
    }
};


export default IndexDetail;
