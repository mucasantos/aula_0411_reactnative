import React from "react";
import { Dimensions, Image, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

export const CarouselImages = () => {


    const { width } = Dimensions.get('window');
    const imagens = [
        { id: 1, url: 'https://picsum.photos/id/1011/400/300' },
        { id: 2, url: 'https://picsum.photos/id/1012/200/300' },
        { id: 3, url: 'https://picsum.photos/id/1013/200/300' },
        { id: 4, url: 'https://picsum.photos/id/1015/200/300' },
        { id: 5, url: 'https://picsum.photos/id/1016/200/300' },
    ]
    return (
        <View>
            <Carousel
                width={width}
                height={300}
                data={imagens}
                scrollAnimationDuration={800}
                autoPlay={true}
                renderItem={({ item }) => (
                    <Image source={{ uri: item.url }} style={{ width: width, height: 300 }} />
                )}
            />
        </View>

    );
}