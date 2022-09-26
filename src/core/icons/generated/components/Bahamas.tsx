import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Bahamas.svg';

export function Bahamas(props: TProps) {
  return (
    <Icon {...props} name="Bahamas">
      <SVG />
    </Icon>
  );
}
