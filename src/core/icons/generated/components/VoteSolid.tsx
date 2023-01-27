import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/VoteSolid.svg';

export function VoteSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="VoteSolid">
      <SVG />
    </Icon>
  );
}
