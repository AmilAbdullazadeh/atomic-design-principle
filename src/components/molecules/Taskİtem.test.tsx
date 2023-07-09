import React from 'react';
import {render, screen} from "@testing-library/react";
import {TaskItem} from "./Taskİtem";


describe('Task Item component', () => {

    it('render component', () => {
        render(<TaskItem task={{id: '1', title: 'test', completed: false}} />)
        expect(screen.getByText('test')).toBeInTheDocument()
        expect(screen.queryByText('test 2')).not.toBeInTheDocument()
    })

})