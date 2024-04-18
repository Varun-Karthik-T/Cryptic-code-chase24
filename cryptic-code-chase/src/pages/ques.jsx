import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Question() {
    return (
        <>
            <div className='flex flex-col justify-center items-center h-screen w-full '>
                <div className="flex flex-col items-center justify-center w-4/5 gap-8">
                    <p className='text-center w-4/5 md:w-3/5'>This is a sample question. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec semper nunc. Sed euismod, nisl id aliquam tincidunt, velit nunc lacinia nunc, id lacinia nunc nunc id nunc. Sed auctor, nunc id aliquet lacinia, nunc nunc lacinia nunc, id lacinia nunc nunc id nunc. Sed auctor, nunc id aliquet lacinia, nunc nunc lacinia nunc, id lacinia nunc nunc id nunc.</p>
                    <Input placeholder="Answer here" className="md:w-3/5 w-4/5" />
                    <Button onClick={() => alert("innu podla")}>Submit</Button>
                </div>
            </div>
        </>
    )
}