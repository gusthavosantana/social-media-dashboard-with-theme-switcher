import React from 'react';
import Switcher from '../Switcher';
import { Header, Title, Subtitle } from './styles';

export default function PageHeader({ title, subtitle }) {
    return (
        <Header>
            <div>
              <Title>{title}</Title>
              <Subtitle>{subtitle}</Subtitle>
            </div>
            <Switcher />
        </Header>
    );
}