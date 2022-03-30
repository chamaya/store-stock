import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import { Item } from './Item';
import { STORE_MOCK_DATA } from '../../../extras/MockData';

const MOCK_ITEM = STORE_MOCK_DATA[0];

describe("Item Component Test", () => {
    //{name, cost, isStocked}
    it("Testing that props are being displayed", ()=>{
        render(
            <table>
                <tbody>
                    <Item name={MOCK_ITEM.name} cost={MOCK_ITEM.price} isStocked={MOCK_ITEM.stocked} />
                </tbody>
            </table>
        );
        screen.debug();
        const component = screen.getByTestId("item-unit-test");
        expect(component).toHaveTextContent(MOCK_ITEM.name);
        expect(component).toHaveTextContent(MOCK_ITEM.price);
    })
});