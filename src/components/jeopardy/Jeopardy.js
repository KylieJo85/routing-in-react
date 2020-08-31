import React, { Component } from 'react';


import JeopardyService from "../JeopardyService";


class Jeopardy extends Component {

    constructor(props) {
        super(props);
        this.client = new JeopardyService();
        this.state = {
            data: {
                "id": null,
                "answer": "",
                "question": "",
                "value": null,
                "airdate": "",
                "created_at": "",
                "updated_at": "",
                "category_id": null,
                "game_id": null,
                "invalid_count": null,
                "category": {
                    "id": null,
                    "title": "",
                    "created_at": "",
                    "updated_at": "",
                    "clues_count": null
                }
            },
            score: 0,

            getAnswer: {

                answer: ""
            }

        }
    }


    //get a new random question from the API and add it to the data object in state
    getNewQuestion() {
        return this.client.getQuestion().then(result => {
            this.setState({
                data: result.data[0]
            })
        })
    }


    //when the component mounts, get a the first question
    componentDidMount() {
        this.getNewQuestion();
    }


    //display the results on the screen

    handleChange = (event) => {

        const { getAnswer } = { ...this.state }

        getAnswer[event.target.answer] = event.target.value

        this.setState({

            getAnswer: {


            }

        })

    }


    handleSubmit = (event) => {

        this.props.answerNow({ ...this.state.answer })

        this.state.data.value+this.state.score

        this.setState({

            answer: {


                answer: "",
                score: this.state.score


            

            }

        })

    }



    render() {
        return (
            <div>
                <strong>USER SCORE: </strong> {this.state.score} <br />
                <strong>QUESTION: </strong> {this.state.data.question} <br />
                <strong>VALUE: </strong> {this.state.data.value} <br />
                <strong>CATEGORY: </strong> {this.state.data.category.title} <br />

                <form className='Answer'
                    onSubmit={this.handleSubmit}>

                    <input name="answer"
                        placeholder="answer"
                        type="answer"
                        value={this.state.answer}
                        onChange={this.handleChange}
                    />


                    <button>SUBMIT ANSWER HERE! </button>



                </form>



            </div>





        );
    }
}
export default Jeopardy;