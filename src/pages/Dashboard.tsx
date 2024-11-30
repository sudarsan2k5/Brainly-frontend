
import '../index.css'
import {Button} from '../components/Button'
import { PluseIcon } from '../icons/PluseIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Card } from '../components/Card'
import { CreateContentModal } from '../components/CreateContentModal'
import { useState } from 'react'
import { Sidebar } from '../components/Sidebar'

export function Dashboard() {
  const [modelOpen, setModealOpen] = useState(false);


  return <div>
    <Sidebar/>
    <div className='p-4 ml-72 min-h-screen bg-gray-100 border-2'>
    <CreateContentModal open={modelOpen} onClose={() => {
      setModealOpen(false);
    }}/>

    <div className='flex justify-end gap-4'>
    <Button onClick={() => {
      setModealOpen(true)
    }}variant='primary' text='Add Content' startIcon={<PluseIcon/>} />
    <Button variant='secondary' text='Share Brain' startIcon={<ShareIcon/>} />
    </div>

    <div className='flex gap-4'>
        <Card type='twitter' link='https://x.com/Sudarsan2k5/status/1630553430229155840' title='First Tweet'
        />
      <Card type='youtube' link='https://www.youtube.com/watch?v=2uZhpRvvVM4' title='First Youtube Video'/>
    </div>
    </div>
</div>
}

export default Dashboard
