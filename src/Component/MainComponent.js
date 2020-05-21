import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import AboutUs from "./AboutComponent";
import { connect } from 'react-redux';                /*this is to coonect my maincomponent to redux store*/

const mapStateToProps = state => {
    return {
      dishes: state.dishes,                       /* Now, this dishes will become available from my Redux Store's state here. */
      comments: state.comments,
       promotions: state.promotions,                      /*This mapStateToProps function will then return. What this does is that this will map the Redux Store's state into props that will become available to my component.*/
      leaders: state.leaders
    }
  }

class Main extends Component {      

    constructor(props) {
        super(props);
    }
    
    render() {

        const HomePage = () => {
            return (
                <Home
                    dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }
      
    const DishWithId = ({match}) => {
        return(
            <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
              comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
        );
      };
      
        return (
            <div>
                {<Header /> /*This is to apply the imported header file in the MainComponent file(this) without this no header */
                }
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route path="/aboutus" component={() => <AboutUs leaders={this.props.leaders} />}/>

              <Redirect to="/home" />
                </Switch>
                {<Footer /> /*This is to apply the imported footer file in the MainComponent file(this) without this no footer */
                }
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));