import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/France.svg';

export function France(props: TBaseProps) {
  return (
    <Icon {...props} name="France">
      <SVG />
    </Icon>
  );
}
