import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Benin.svg';

export function Benin(props: TProps) {
  return (
    <Icon {...props} name="Benin">
      <SVG />
    </Icon>
  );
}
