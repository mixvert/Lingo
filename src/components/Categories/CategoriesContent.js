import React from "react";
import '../styles_components/style_content.scss';
import axios from "../../axios";
import SingleCategory from "./SingleCategory";
import {Container, Grid, Typography} from "@mui/material";
import AnimatedElement from "../Animation/AnimatedElementOnce";

class CategoriesContent extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            notes: [],
            categories: [],
        }
    }

    componentDidMount () {
        this.fetchNotes();
        this.fetchCategories();
    }

    async fetchNotes () {
        const res = await axios.get('/posts');
        const notes = res.data;
        this.setState({notes});
    }

    async fetchCategories () {
        const res = await axios.get('/categories');
        const categories = res.data;
        this.setState({categories});
    }

    render () {
        return (
            <Container>
                <AnimatedElement className={`animated-element animated-element-delay-100ms`}>
                <Typography
                    variant={`h4`}
                    className={`CategoryCTA Font`}
                >
                    Eksploruj według <br/>
                    <span style={{'color': '#ad5187'}}>
                    kategorii
                    </span>
                </Typography>
                </AnimatedElement>
                <Grid
                    container
                    columnSpacing={{xs: 2, sm: 6, md: 6}}
                    rowSpacing={{xs: 4, sm: 6, md: 6}}
                    className="PositionCategories"
                >
                    {this.state.categories.map((category) => (
                        <SingleCategory
                            key={category._id}
                            id={category._id}
                            name={category.name}
                            description={category.description}
                            icon={category.icon}
                            className={`SingleCategory`}
                        />
                    ))}
                </Grid>
            </Container>
        );
    }
}

export default CategoriesContent;
