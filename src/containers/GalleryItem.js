import React,{Component} from 'react';
import { connect } from 'react-redux';
import { selectedGallery, clearSelectedGallery } from '../actions';
import { bindActionCreators } from 'redux';
import Slider from 'react-slick';

// counter container
import Counter from './LikesCounter';


const settings= {
    dots:true,
    infinite:true,
    arrows:false,
    speed:500
}


class Gallery extends Component{

    componentDidMount(){
        this.props.selectedGallery(this.props.match.params.id)
    }

    componentWillUnmount(){
        this.props.clearSelectedGallery();
    }

    renderSlider = ({selected})=>{
        if(selected){
            const gallery = selected[0]
            return(
                <div>
                    <h3>The best of {gallery.artist}</h3>
                    <Slider {...settings}>
                        {gallery.images.map((item,index)=>{
                            return(
                                <div key={index} className='slide-item'>
                                    <div>
                                        <div
                                            className='image'
                                            style={{background:`url(/images/galleries/${item.img})`}}
                                        ></div>
                                        <div className='description'>
                                            <span>{item.desc}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                    <Counter 
                        articleId={gallery.id}
                        type='HANDLE_LIKES_GALLERY'
                        section='galleries'
                        likes={gallery.likes[0]}
                        dislikes={gallery.likes[1]}
                    />
                </div>
            )
        }
    }

    render(){
        return(
            <div className='slide-item-wrap'>
                {this.renderSlider(this.props.gallery)}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        gallery:state.gallery
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectedGallery,clearSelectedGallery},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)