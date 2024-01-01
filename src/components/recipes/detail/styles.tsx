import { StyleSheet, Dimensions } from 'react-native';

const { width: viewportWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  carouselContainer: {
    
  },
  infoPhoto: {
    marginRight: '5%',
  },
  food_image: {
    borderRadius: 20
  },
  footVideo: {
    position: 'relative', 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    paddingVertical: 5,
    borderRadius: 10,
    marginLeft: '61%',
    top: -38,
  },
  timeContainer: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B73E3E',
    width: '100%',
    paddingVertical: 5,
    borderRadius: 20,
    marginLeft: '63%',
    top: '-14%',
    marginRight: 14,
  },
  timeText: {
    fontSize: 13,
    color: '#D9D9D9',
  },
  in_active: {
    top: '-14%',
  },
  contentContainer: {
    position: 'relative',
    marginLeft: '4.5%',
    top: -30
  },
  content: {
    fontSize: 19,
    color: 'black',
    fontWeight: '700'
  },
  rateContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE1B3',
    paddingVertical: 10,
    borderRadius: 20,
    marginLeft: '4%',
    width: '42%',
    marginTop: -135,
    marginRight: 14,
  },
  reviewContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 10,
    borderRadius: 20,
    width: '42%',
    marginTop: -135,
    marginLeft: 200,
  }
});

export default styles;
