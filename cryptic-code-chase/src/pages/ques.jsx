import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import domtoimage from 'dom-to-image';
import data from '../data.json';
import { IoTimeSharp, IoLocationSharp } from "react-icons/io5";






export default function Question({ location, nextClue, id }) {

    const [temp, setTemp] = useState(0);
    const [temp1, setTemp1] = useState('');
    const [team, setTeam] = useState(0);
    const [solved, setSolved] = useState(false);


    function questionPicker(team, id) {
        return (((team % 5) + (id - 1)) % 5);
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
                        <Button variant="var1" onClick={() => temp > 0 && temp < 100 ? setTeam(temp) : alert("Enter a valid team number")}>Submit</Button>
                    </div>
                </div>
            )}

            {team && !solved && (
                <div className='flex flex-col justify-center items-center h-screen w-full '>
                    <div className="flex flex-col items-center justify-center w-4/5 gap-8">
                        <p className='text-center text-white w-4/5 md:w-3/5'>Enter answer as "123". This is a sample question{questionPicker(team, id)}.{data.questions[questionPicker(team, id)].question}</p>
                        <Input placeholder="Answer here" className="md:w-3/5 w-4/5" onChange={(e) => setTemp1(e.target.value)} />
                        <Button variant="var1" onClick={() => answerCheck(temp1)}>Submit</Button>
                    </div>
                </div>
            )}

            {solved &&

                (<div className='flex flex-col justify-center items-center h-screen w-full gap-3 shadow-lg '>
                    <div id="html-content" style={{ backgroundColor: 'rgba(0, 41, 107, 1)' }}>
                        <div className=' w-fit p-6 bg-[rgba(0, 41, 107,0)] rounded-lg'>
                            <div className='flex flex-col gap-2 items-center justify-center border-2 border-yellow-500 text-white w-fit p-4 '>
                                <h1> <span className='text-yellow-500 font-semibold'>Team {team}!! </span> Yay ! you cracked it</h1>

                                <div className='flex flex-row justify-center items-center gap-1'>
                                    <IoLocationSharp className='text-yellow-500 size-5' />
                                    <p>Location{id} : {location}</p>
                                </div>
                                <p></p>
                                <div className='flex flex-row justify-center items-center gap-1'>
                                    <IoTimeSharp className='text-yellow-500 size-5' />
                                    <p>{new Date().toLocaleString()}</p>
                                </div>
                                <h1 className='text-yellow-500'>Next Location Clue:</h1>
                                <p>{nextClue}</p>
                            </div>
                        </div>
                    </div>
                    <Button variant='var1' onClick={convertToPNG}>Download</Button>
                </div>
                )
            }
        </>
    );
}
