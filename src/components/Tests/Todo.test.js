import { cleanup, render, screen } from "@testing-library/react"
import renderer from 'react-test-renderer'
import { Todo } from "../Todo"
afterEach(()=>{
    cleanup();
})
test('should render Todo Component with strike', () => {
    const todo={id:1,title:"design",status:true}
    render(<Todo todo={todo}/>)
    const todoEle=screen.getByTestId('todo-1')
    expect(todoEle).toBeInTheDocument()
    expect(todoEle).toHaveTextContent('design')
    expect(todoEle).not.toContainHTML('<strike>')
})

test('should render Todo Component without strike', () => {
    const todo = { id: 1, title: "design", status: false };
    render(<Todo todo={todo} />);
    const todoEle = screen.getByTestId('todo-1');
    expect(todoEle).toBeInTheDocument();
    expect(todoEle).toHaveTextContent("design");
    expect(todoEle).toContainHTML('<div data-testid="todo-1"><h1>design</h1></div>');

})


test('matches snaphot', () => { 
    const todo = { id: 1, title: "design", status: false };
    const tree= renderer.create(<Todo todo={todo}/>)
    expect(tree).toMatchSnapshot()
})


