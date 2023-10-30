const LightStates = {
    Green: {
        name: 'Green',
        duration: 8
    },
    Yellow: {
        name: 'Yellow',
        duration: 3
    },
    Red: {
        name: 'Red',
        duration: 13
    }
}
class TrafficLight {
    constructor(numOfLights) {
        this.numOfLights = numOfLights;
        this.lights = []
        this.EastWest = {
            state: LightStates.Green.name,
            currentTime: 1,
        }
        this.NorthSouth = {
            state: LightStates.Red.name,
            currentTime: 1
        }
    }

    incrementTime() {
        this.EastWest.currentTime += 1
        this.NorthSouth.currentTime += 1
        this.shouldChange(this.EastWest)
        this.shouldChange(this.NorthSouth)
    }

    shouldChange(light) {
        // console.log('shouldChange', light)
        switch (light.state) {
            case LightStates.Green.name: {
                if (light.currentTime > LightStates.Green.duration) {
                    light.state = LightStates.Yellow.name
                    light.currentTime = 1
                }
                break;
            }
            case LightStates.Yellow.name: {
                if (light.currentTime > LightStates.Yellow.duration) {
                    light.state = LightStates.Red.name
                    light.currentTime = 1
                }
                break;
            }
            case LightStates.Red.name: {
                if (light.currentTime > LightStates.Red.duration * this.numOfLights) {
                    light.state = LightStates.Green.name
                    light.currentTime = 1
                }
                break;
            }
        }
    }

    getState() {
        return {
            EastWest: this.EastWest,
            NorthSouth: this.NorthSouth
        }
    }

    getStateAtTime(time) {
        for(let i = 0; i < time; i++) {
            this.incrementTime()
        }
        return this.getState()
    }
}

const trafficLight = new TrafficLight()

// setInterval(() => {
//     console.log(trafficLight.getState())
//     trafficLight.incrementTime()
// }, 1000)

console.log(trafficLight.getStateAtTime(25))
