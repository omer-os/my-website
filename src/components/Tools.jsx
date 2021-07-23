import React from 'react'
import styled from 'styled-components'

export default function Tools() {
    return (
        <Body>
            <div className="TitleLine">
                Most Rectent
            </div>

            <div className="Projects">
                
                <div className="ProjectCard">
                    <div className="ProjectTitle">react-calculator</div>
                    <div className="ProjectBody">simple calculator made by react js</div>
                    <div className="ProjectButtons">
                        <button>learn more</button>
                        <button>source code</button>
                        <button>live demo</button>
                    </div>
                </div>
                <div className="ProjectCard">
                    <div className="ProjectTitle">react-calculator</div>
                    <div className="ProjectBody">simple calculator made by react js</div>
                    <div className="ProjectButtons">
                        <button>learn more</button>
                        <button>source code</button>
                        <button>live demo</button>
                    </div>
                </div>

                <div className="ProjectCard">
                    <div className="ProjectTitle"></div>
                    <div className="ProjectBody"></div>
                    <div className="ProjectButtons">
                        <button>learn more</button>
                        <button>source code</button>
                        <button>live demo</button>
                    </div>
                </div>

            </div>
        </Body>
    )
}


export const Body = styled.div`
    padding: 79px;
    .TitleLine{
        background-color: #486E8D;
        color: white;
        padding: 15px;
        font-size: 1.2rem;
    }

    .Projects{
        display: flex;
        background-color: antiquewhite;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 15px;
    }

    .ProjectCard{
        border: 2px solid #486E8D;
        padding: 20px;
        line-height: 40px;
        text-transform: capitalize;
        font-family: sans-serif;
        width: 440px;
        margin-bottom: 50px;


        .ProjectTitle{
            font-size: 5vmin;
        }

        .ProjectBody{
            font-size: 4vmin;
            font-weight: 300;
            color: rgba(59, 59, 59, 1);
        }

        .ProjectButtons{
            display: flex;
            justify-content: space-evenly;

            button{
                background-color: rgba(46, 135, 255, 1);
                border: none;
                padding: 5px 10px;
                color: white;
                font-size: 2.5vmin;
                margin-top: 25px;
                cursor: pointer;
            }
        }
    }


`