import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export default function Tools() {

    const [ProjectsList, setProjectsList] = useState([])

    useEffect(()=>{
        fetch('https://api.github.com/search/repositories?q=user:omer-os+sort:author-date-asc').then(res=>res.json()).then((data)=>{
        const Projects = []
            data.items.forEach((i)=>{
                Projects.push({
                    ProjectName : i.name,
                    ProjectUrl : i.html_url,
                    ProjectDescription : i.description,
                    ProjectCommits : i.git_commits_url,
                    ProjectCreationDate : i.created_at,
                    ProjectLastUpdate : i.updated_at,
                    ProjectWatchers : i.watchers,
                    id : i.id
                })
            })
            setProjectsList(Projects)
        })
      },[])



    return (
        <Body>
            <div className="TitleLine">
                My Projects
            </div>

            <div className="Projects">
                
                {/* <div className="ProjectCard">
                    <div className="ProjectTitle">react-calculator</div>
                    <div className="ProjectBody">simple calculator made by react js</div>
                    <div className="ProjectButtons">
                        <button>learn more</button>
                        <button>source code</button>
                        <button>live demo</button>
                    </div>
                </div> */}

                {ProjectsList.map((project)=>{
                    return (
                        <div key={project.id} className="ProjectCard">
                            <div className="ProjectTitle">{project.ProjectName}</div>
                            <div className="ProjectBody">{project.ProjectDescription}</div>
                            <div className="ProjectButtons">
                                <a href=""><button>learn more</button></a>
                                <a href={project.ProjectUrl}><button>source code</button></a>
                                <a href=""><button>live demo</button></a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Body>
    )
}


export const Body = styled.div`
    padding: 79px;
    @media (max-width: 650px){
        padding: 20px;
    }
    .TitleLine{
        background-color: #486E8D;
        color: white;
        padding: 15px;
        font-size: 1.2rem;
        text-transform: capitalize;
        font-family: sans-serif;
    }

    .Projects{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 15px;
        @media (max-width: 999px){
            justify-content: center;
        }
    }

    .ProjectCard{
        border: 2px solid #486E8D;
        padding: 20px;
        line-height: 40px;
        text-transform: capitalize;
        font-family: sans-serif;
        width: 350px;
        margin-bottom: 50px;

        @media (max-width: 390px){
            line-height: 30px;
        }


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