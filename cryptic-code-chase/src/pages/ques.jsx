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
        if (id == 0) {
            return 0;
        }
        if (id < 5) {

            console.log(team, id);

            const temp = team % 4;
            console.log(temp);
            let a = [1, 2, 3, 4];
            if (temp == 0) {
                a = [1, 2, 3, 4];
            }
            else if (temp == 1) {
                a = [3, 4, 1, 2];
            }
            else if (temp == 2) {
                a = [2, 3, 4, 1];
            }
            else if (temp == 3) {
                a = [4, 1, 2, 3];
            }
            console.log(a[id - 1]);
            return a[id - 1];
        }
        else { return id; }
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
                    <div className='flex flex-col items-center justify-center w-3/5 gap-3'>
                        <p className='text-white'>Team Number</p>
                        <Input placeholder="Enter team number:" onChange={(e) => setTemp(e.target.value)} />
                        
                        <Button variant="var1" onClick={() => temp > 0 && temp < 100 ? setTeam(temp) : alert("Enter a valid team number")}>Submit</Button>
                        <p className='text-white text-center'><span className='text-yellow-500'>Tips:</span>While answering Capital letters only.Avoid unnecessary spaces</p>
                    </div>
                </div>
            )}

            {team && !solved && (
                <div className='flex flex-col justify-center items-center h-screen w-full text-center'>
                    <div className="flex flex-col items-center justify-center w-4/5 gap-2 ">
                        <p className=' text-white w-4/5 md:w-3/5'>{data.questions[questionPicker(team, id)].question}</p>
                        {data.questions[questionPicker(team, id)].cipher && <><p className="text-yellow-500">Cipher/Code:</p><p className='text-white'>{data.questions[questionPicker(team, id)].cipher}</p></>}
                        {data.questions[questionPicker(team, id)].key && <><p className='text-white'><span className="text-yellow-500">Key:</span>{data.questions[questionPicker(team, id)].key}</p></>}
                        {data.questions[questionPicker(team, id)].hint && <><p className="text-yellow-500">Hint:</p><p className='text-white '>{data.questions[questionPicker(team, id)].hint}</p></>}

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
                                <p className='text-center'>{nextClue}</p>
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
