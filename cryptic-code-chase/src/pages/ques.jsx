import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import domtoimage from 'dom-to-image';
import data from '../data.json';






export default function Question({ location, nextClue, id }) {

    const [temp, setTemp] = useState(0);
    const [temp1, setTemp1] = useState('');
    const [team, setTeam] = useState(0);
    const [solved, setSolved] = useState(false);


    function questionPicker(team, id) {
        return (((team % 5) + (id-1)) % 5);
    }





    function convertToPNG() {
        const node = document.getElementById('html-content');
        domtoimage.toPng(node)
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.href = dataUrl;
                link.download = `Location ${id}.png`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch((error) => {
                console.error('Error converting HTML to PNG:', error);
            });
    };




    function answerCheck(givenAnswer) {
        if (givenAnswer === data.questions[questionPicker(team, id)].answer) {
            setSolved(true);
            convertToPNG();
        } else {
            alert('Wrong Answer');
            setSolved(false);
        }
    };


    return (
        <>
            {!team && (
                <div className='flex flex-col justify-center items-center h-screen w-full '>
                    <div className='flex flex-col items-center justify-center w-3/5 gap-8'>
                        <Input placeholder="Enter team number:" onChange={(e) => setTemp(e.target.value)} />
                        <Button onClick={() => temp>0 && temp<100?setTeam(temp):alert("Enter a valid team number")}>Submit</Button>
                    </div>
                </div>
            )}

            {team && !solved && (
                <div className='flex flex-col justify-center items-center h-screen w-full '>
                    <div className="flex flex-col items-center justify-center w-4/5 gap-8">
                        <p className='text-center w-4/5 md:w-3/5'>Enter answer as "123". This is a sample question{questionPicker(team, id)}.{data.questions[questionPicker(team, id)].question}</p>
                        <Input placeholder="Answer here" className="md:w-3/5 w-4/5" onChange={(e) => setTemp1(e.target.value)} />
                        <Button onClick={() => answerCheck(temp1)}>Submit</Button>
                    </div>
                </div>
            )}

            {solved &&

                (<div className='flex flex-col justify-center items-center h-screen w-full'>
                    <div id="html-content" className='bg-white w-fit p-4'>
                        <div className='flex flex-col gap-3 items-center justify-center border-2 border-black w-fit p-5'>
                            <h1>Team {team}!! yay ! you cracked it</h1>
                            <p>You are at Location{id} : {location}</p>
                            <p>{new Date().toLocaleString()}</p>
                            <h1>Next Location Clue:</h1>
                            <p>{nextClue}</p>
                        </div>
                    </div>
                    <Button onClick={convertToPNG}>Download</Button>
                </div>
                )
            }
        </>
    );
}
