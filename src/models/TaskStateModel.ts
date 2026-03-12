import type { TaskModel } from "./TaskModel";

export type TaskStateModel = {
    tasks: TaskModel[]; // historico, MainForm
    secondsRemaining: number; //CounterDown, Histórico, MainForm, Button
    formattedSecondsRemaining: string; // Titulo, CountDown
    activeTask: TaskModel | null; // CountDown, Historico, MainForm, Button
    currentCycle: number; // Home
    config: {
        workTime: number; // MainForm
        shortBreakTime: number; // MainForm
        longBreakTime: number; // MainForm
    };
};
