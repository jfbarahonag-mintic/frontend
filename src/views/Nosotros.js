import React from 'react'
import SiteHeader from "../components/SiteHeader"
import PageTitle from '../components/PageTitle'
import MemberCard from '../components/MemberCard'

const Nosotros = props => {

  const members = [
    {
      name: 'Juan Peréz',
      img: {
        src: '/images/nosotros/mono.jpg',
        alt: 'Juan Perez trabajando.'
      },
      job: {
        name: 'Desarrollador Web Full Stack',
        url: '/'
      }
    },
  ]

  const MembersList = () => {

    return (
      <div className="members__list" >
        {
          members.map(member => {
            return (
              <MemberCard 
                key={ member.name }
                name={ member.name }
                img={ member.img }
                job={ member.job }
              />
            )
          })
        }
      </div>
    )
  }

  return (
    <div>
      <SiteHeader />
      <PageTitle title="NOSOTROS"/>
      <br/>
      <MembersList />
      <br/>
    </div>
  )
}

export default Nosotros
