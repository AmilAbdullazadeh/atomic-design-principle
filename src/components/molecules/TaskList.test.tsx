import { render, screen, waitFor } from '@testing-library/react';
import mockAxios from 'jest-mock-axios';
import { TaskList } from './TaskList';

afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
});

describe('TaskList', () => {
    it('fetches and displays tasks from an API', async () => {
        render(<TaskList />);

        // simulating a server response
        mockAxios.mockResponse({
            data: [
                { id: '1', title: 'First Task', completed: false },
                { id: '2', title: 'Second Task', completed: true },
            ],
        });

        // waiting for the promise to resolve
        await screen.findByText('First Task');

        expect(screen.getByText('First Task')).toBeInTheDocument();
        expect(screen.getByText('Second Task')).toBeInTheDocument();
        expect(screen.getByText('Completed')).toBeInTheDocument();
        expect(screen.getByText('Incomplete')).toBeInTheDocument();
    });
});
