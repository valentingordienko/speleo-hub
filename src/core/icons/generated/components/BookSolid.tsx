import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BookSolid.svg';

export function BookSolid(props: TProps) {
  return (
    <Icon {...props} name="BookSolid">
      <SVG />
    </Icon>
  );
}
