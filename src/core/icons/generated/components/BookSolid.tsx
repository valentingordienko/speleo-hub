import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BookSolid.svg';

export function BookSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="BookSolid">
      <SVG />
    </Icon>
  );
}
