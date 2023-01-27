import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Bahamas.svg';

export function Bahamas(props: TBaseProps) {
  return (
    <Icon {...props} name="Bahamas">
      <SVG />
    </Icon>
  );
}
