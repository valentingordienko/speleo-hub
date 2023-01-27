import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Benin.svg';

export function Benin(props: TBaseProps) {
  return (
    <Icon {...props} name="Benin">
      <SVG />
    </Icon>
  );
}
