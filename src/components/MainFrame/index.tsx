import { Content } from "../Content";
import { SideBar } from "../SideBar";


type FrameProps = {
    children: React.ReactNode;
};


const Div = styled.div`
    display: flex;
    color: #1d1d1d;
`;


export function MainFrame(props: FrameProps) {
    return (
        <Div>
            <SideBar />
            <Content>
                {props.children}
            </Content>
        </Div>
    );
}