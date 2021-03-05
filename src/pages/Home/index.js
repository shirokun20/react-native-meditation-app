import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import {ICBell, ILBg, ILBlogImage, ILCardSatu} from '../../assets';
import {BlogCard, ButtonTwo, CardCategory} from '../../components';
import { setWitdh } from '../../library/dimenstion.lib';

function index() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor="#2748C9" />
      <View style={styles.header}>
        <View>
          <Text style={[styles.greeting, {
          }]}>Selamat Malam,</Text>
          <Text style={styles.name}>Peserta Himatika</Text>
        </View>
        <View style={styles.icBell}>
          <ICBell />
        </View>
      </View>
      <View style={[styles.boxHeader, {
        position: 'absolute',
        height: setWitdh(27),
        width: setWitdh(90),
        top: setWitdh(15),
        elevation: 2,
        backgroundColor: '#FFF',
        borderRadius: 20,
      }]}>
        <Image source={ILBg} style={styles.cardImage} />
        <View style={{
            position: 'absolute',
            left: 10,
            paddingVertical: 5,
            height: setWitdh(26),
            justifyContent: 'space-between',
        }}>
            <Text style={[styles.titleHeaderCard, {
                fontSize: setWitdh(4.5)
            }]}>Meditasi kesadaran mu</Text>
            <Text style={[styles.titleHeaderDesc, {
                fontSize: setWitdh(3.5)
            }]}>
            Bertujuan agar kamu sadar {'\n'}akan perasaan.
            </Text>
            <ButtonTwo title="Mulai" />
        </View>
      </View>
      <View style={[styles.box, {
          marginTop: setWitdh(13.5),
          width: setWitdh(90),
      }]}>
        <Text style={styles.title}>Rekomendasi Untukmu</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <CardCategory title="Motivasi" ilustration={<ILCardSatu />} />
          <CardCategory title="Rilex" ilustration={<ILCardSatu />} />
          <CardCategory title="Tidur" ilustration={<ILCardSatu />} />
          <CardCategory title="Motivasi" ilustration={<ILCardSatu />} />
          <CardCategory title="Rilex" ilustration={<ILCardSatu />} />
          <CardCategory title="Tidur" ilustration={<ILCardSatu />} />
        </ScrollView>
      </View>
      <View style={[styles.box, {
          width: setWitdh(90),
      }]}>
        <Text style={styles.title}>Blog Meditasi</Text>
        <BlogCard
          title="Cara meditasi untuk Pemula"
          ilustration={ILBlogImage}
        />
        <BlogCard
          title="Cara meditasi untuk Pemula"
          ilustration={ILBlogImage}
        />
        <BlogCard
          title="Cara meditasi untuk Pemula"
          ilustration={ILBlogImage}
        />
        <BlogCard
          title="Cara meditasi untuk Pemula"
          ilustration={ILBlogImage}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEFF1',
  },
  header: {
    backgroundColor: '#2748C9',
    padding: 24,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 150,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  icBell: {
    marginTop: 14,
  },
  greeting: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    lineHeight: 24,
    color: '#FFF',
    letterSpacing: 0.5,
    fontWeight: '400',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFF',
    fontFamily: 'OpensSans-Regular',
  },
  boxHeader: {
    marginHorizontal: 24,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    resizeMode: 'cover',
  },
  titleHeaderCard: {
    fontFamily: 'OpenSans-Bold',
    color: '#000',
  },
  titleHeaderDesc: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    color: '#000',
  },
  box: {
    marginHorizontal: 24,
    marginBottom: 16,
  },
  title: {
    fontSize: 14,
    fontFamily: 'OpenSans-Bold',
    lineHeight: 18,
    marginBottom: 8,
  },
});

export default index;
