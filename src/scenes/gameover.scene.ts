import { Color, Engine, Font, Label, Scene, TextAlign, Vector } from 'excalibur'
import { MyApp } from '../app'

export class GameOverScene extends Scene {
    onInitialize(engine: Engine) {
        super.onInitialize(engine)

        const gameover = new Label({
            pos: new Vector(engine.halfDrawWidth, engine.halfDrawHeight - 100),
            color: Color.White,
            text: 'Game over :(',
            font: new Font({
                family: 'Arial',
                size: 20,
                textAlign: TextAlign.Center,
            }),
        })
        this.add(gameover)

        const menu = new Label({
            pos: new Vector(engine.halfDrawWidth, engine.halfDrawHeight),
            color: Color.White,
            text: 'Go to menu',
            font: new Font({
                family: 'Arial',
                size: 20,
                textAlign: TextAlign.Center,
            }),
        })
        menu.on('pointerup', () => MyApp.BackToMenu())
        this.add(menu)

        const restart = new Label({
            pos: new Vector(engine.halfDrawWidth, engine.halfDrawHeight + 50),
            color: Color.White,
            text: 'Restart',
            font: new Font({
                family: 'Arial',
                size: 20,
                textAlign: TextAlign.Center,
            }),
        })
        restart.on('pointerup', () => MyApp.RestartGame())
        this.add(restart)
    }
}
