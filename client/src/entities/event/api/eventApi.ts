import { AxiosResponse } from "axios"
import axiosInstance from "../../../services/axiosInstance"
import { Event } from "../types/eventType"

type EventsResponse = {
    events: Event[]
    message: string
}

class EventApi {

    static getAllEvents = async() : Promise<EventsResponse> => {
        try {
            const response: AxiosResponse<EventsResponse> = await axiosInstance.get('/events')
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
}


export default EventApi