import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/InfoOutline.svg';

export function InfoOutline(props: TProps) {
  return (
    <Icon {...props} name="InfoOutline">
      <SVG />
    </Icon>
  );
}
