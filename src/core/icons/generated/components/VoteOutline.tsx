import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/VoteOutline.svg';

export function VoteOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="VoteOutline">
      <SVG />
    </Icon>
  );
}
