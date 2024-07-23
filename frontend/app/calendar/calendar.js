import Layout from '@/app/calendar/layout'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import timeGridPlugin from '@fullcalendar/timegrid'

// https://github.com/fullcalendar/fullcalendar-examples/blob/main/next13/pages/calendar.js
export default function CalendarPage() {
  return (
    <Layout>
      <div className='calendar-container'>
        <FullCalendar
          plugins={[
            resourceTimelinePlugin,
            dayGridPlugin,
            interactionPlugin,
            timeGridPlugin
          ]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'resourceTimelineWeek,dayGridMonth,timeGridWeek'
          }}
          initialView='resourceTimelineWeek'
          nowIndicator={true}
          editable={true}
          selectable={true}
          selectMirror={true}
          resources={[
            { id: 'a', title: 'Auditorium A' },
            { id: 'b', title: 'Auditorium B', eventColor: 'green' },
            { id: 'c', title: 'Auditorium C', eventColor: 'orange' },
          ]}
          initialEvents={[
            { title: 'nice event', start: new Date(), resourceId: 'a' }
          ]}
        />
      </div>
    </Layout>
  )
}