import { useContext } from 'react'
import { friends } from '../utils/constants'
import { SWContext } from '../utils/context'
import Friend from './Friend'


const DreamTeam = () => {
    const {hero} = useContext(SWContext);
    return (
        <section className="ml-1 float-right w-1/2 border border-base-color rounded-b-3xl grid-cols-3 grid gap-0.5">
            <h2 className="col-span-3 text-center text-3xl">Dream Team</h2>
            {friends.filter(friend => friend !== hero).map((friend, index) => <Friend key={index} pos={index + 1} friend={friend}/>)}
        </section>
    )
}

export default DreamTeam