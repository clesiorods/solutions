import { View } from "react-native";
import {
    VictoryChart,
    VictoryLine,
    VictoryTheme,
    VictoryAxis,
    VictoryBar,
    VictoryTooltip,
    VictoryVoronoiContainer,

} from 'victory-native';


export default function LineChart() {
    return (
        <View style={{ position: 'absolute' }} >
            <VictoryChart height={160} width={400}
                domainPadding={{ y: 0, x: 0 }}
                maxDomain={{ y: 6 }}
                minDomain={{ y: -5 }}
                animate={{
                    duration: 350
                }}
                categories={{ x: ["dogs", "cats", "mice"] }}
                containerComponent={
                    <VictoryVoronoiContainer
                        voronoiDimension="x"
                        labels={({ datum }) => `y: ${datum.y}`}
                        labelComponent={
                            <VictoryTooltip
                                cornerRadius={0}
                                flyoutStyle={{ fill: "white" }}
                            />}
                    />}
            >
                <VictoryLine
                    interpolation="cardinal"
                    style={{ data: { stroke: 'red', strokeWidth: 3, strokeLinecap: "round" } }}
                    data={[
                        { x: 1, y: 0, l: "one" },
                        { x: 1.5, y: 5, l: "one point five" },
                        { x: 2, y: 4, l: "two" },
                        { x: 3, y: -0, l: "three" }
                    ]}
                />

                <VictoryLine
                    interpolation="cardinal"
                    style={{ data: { stroke: 'green', strokeWidth: 3 } }}
                    data={[
                        { x: 1, y: -3, l: "red" },
                        { x: 2, y: 5, l: "green" },
                        { x: 3, y: 3, l: "blue" }
                    ]}
                />

                <VictoryLine
                    interpolation="cardinal"
                    style={{ data: { stroke: 'white', strokeWidth: 3 } }}
                    data={[
                        { x: 1, y: 5, l: "cat" },
                        { x: 2, y: -4, l: "dog" },
                        { x: 3, y: -2, l: "bird" }
                    ]}
                />
            </VictoryChart>
        </View>
    );
}