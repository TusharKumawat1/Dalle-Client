import {surpriseMePrompts} from "../constant";
import FileSaver from "file-saver";

export function getRandomPrompt(prompt){
    const randomIndex=Math.floor(Math.random()* surpriseMePrompts.length)
    const randomPost=surpriseMePrompts[randomIndex]
    if(randomPost===prompt) return getRandomPrompt(prompt);

    return randomPost
}

export async function downloadImg(_id,photo){
    FileSaver.saveAs(photo,`download-${_id}.jpg`)
}