import React, { Component } from 'react'
import HornedBeasts from './HornedBeasts'

export class Main extends Component {
    render() {
        let horns = [
            {name : 'UniWhal', source : 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg', par : 'A unicorn and a narwhal nuzzling their horns' }, 
            {name : 'Unicorn Head', source : 'https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg', par : 'Someone wearing a creepy unicorn head mask'}
          ]
        return (
            <div>
            <HornedBeasts name = {horns[0].name} source = {horns[0].source} par = {horns[0].par}/>
            <HornedBeasts name = {horns[1].name} source = {horns[1].source} par = {horns[1].par}/>  
            </div>
        )
    }
}

export default Main
