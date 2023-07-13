export type Price = number;

export interface WorkshopDraft {
    id: string,
    title: string,
    description: string,
    agenda?: string,
    attendeesCount: number,
    price: Price,
    workshopLectureRatio?: string,
    meetings:  Array<Meeting>,
    trainer: Trainer
}

export interface Meeting {
    startDate?: Date,
    endDate?: Date,
    meetingLocation?: string,
    agenda?: string
}

export interface Trainer {
    name: string,
    email: string,
    discordNick: string
}