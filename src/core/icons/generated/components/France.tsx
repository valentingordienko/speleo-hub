import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/France.svg';

export function France(props: TProps) {
  return (
    <Icon {...props} name="France">
      <SVG />
    </Icon>
  );
}
